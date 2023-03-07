import './Sidebar.scss';
import * as Assets from "assets";
import { Landing } from "modules";
import { RouteArrayProps } from "components";
import { useLocation, matchPath, RouteProps } from 'react-router-dom';

function matchPaths(path: string, routes: RouteProps[]) {
  let def = null;

  for (let r of routes) {
    if (!r.exact && !r.path) {
      def = r;
    }

    let res = matchPath(path, r);
    if (res) { return r; }
  }

  return def;
}

function useRouteComponent() {
  let location = useLocation();
  return matchPaths(location.pathname, RouteArrayProps)?.component;
}

export function Sidebar() {
  let component = useRouteComponent();
  if (component !== Landing) { return <></>; }

  return (

  );
}
