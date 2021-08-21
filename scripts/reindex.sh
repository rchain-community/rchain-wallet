#!/bin/bash

REINDEX_ROOT="$(realpath ${BASH_SOURCE[0]})"
REINDEX_ROOT="$(dirname $REINDEX_ROOT)"
REINDEX_ROOT="$(dirname $REINDEX_ROOT)"

function map_name() {
  case "$1" in
    rho) echo " as rho" ;;
    globals) echo " as g" ;;
    rchain) echo " as rc" ;;
    blockchain) echo " as bc" ;;
    *) ;;
  esac
}

for index_file in $(find $REINDEX_ROOT -wholename "$REINDEX_ROOT/src/**/index.ts"); do
  index_dir="$(dirname $index_file)"

  if [ -f "$index_dir/reindex.sh" ]; then
    $index_dir/reindex.sh
    continue
  fi

  text=""
  text=$text"// @NOTE: This file is automatically generated by running 'reindex.sh'.\n"
  text=$text"// Please do not modify this file directly, as the changes will most\n"
  text=$text"// likely be lost. Instead, the script itself should be modified.\n"

  for file in $(find $index_dir -name "*.tsx" -or -name "*.ts" | sort); do
    if [ "$(basename $file)" == "index.ts" ] || [ "$(basename $file)" == "index.tsx" ]; then
      continue
    fi

    PATHNAME=./$(realpath $file --relative-to $index_dir)
    BN="$(basename $PATHNAME .ts)"
    BN="$(basename $BN .tsx)"
    FN="$(dirname "$PATHNAME")""/$BN"
    RO="$(basename $FN)"
    text=$text"export "'*'"$(map_name $RO) from '$FN';\n"
  done

  echo -e "$text" > $index_dir/index.ts
done
