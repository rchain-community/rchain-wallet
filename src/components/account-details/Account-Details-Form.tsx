// @TODO: Check if this style import is needed.
import 'styles/FormScreen.scss';
import { useState, useEffect } from 'react';
import * as u from 'utils';

export function useAccountDetails() {
	let username = u.useWritable("");
	let password1 = u.useWritableWithToggle("", false);
	let password2 = u.useWritableWithToggle("", false);

	const [registration_valid, set_registration_valid] = useState(false);

	function check_validity() {
		if (username.value.length < 3) {
			set_registration_valid(false);
			return;
		}

		if (password1.value.length < 6) {
			set_registration_valid(false);
			return;
		}

		if (password2.value !== password1.value) {
			set_registration_valid(false);
			return;
		}

		set_registration_valid(true);
	}

	useEffect(check_validity, [username, password1, password2]);

	return {
		username,
		password1,
		password2,
		registration_valid
	};
}

interface AccountDetailsProps {
	state: ReturnType<typeof useAccountDetails>;
};

export function AccountDetailsForm(props: AccountDetailsProps) {
	let { username, password1, password2 } = props.state;

	return (<>
		<label>
			<p>Username (3+ characters)</p>
			<input value={username.value}
				 onChange={username.write}/>
		</label>

		<label>
			<p>Password (6+ characters)</p>
			<input value={password1.value}
					type={password1.toggle_value ? "text" : "password"}
					onChange={password1.write}/>
			<button className="Hanging"
					onClick={password1.toggle}>
				Toggle
				{/* @TODO: Replace text with icon */}
			</button>
		</label>

		<label>
			<p>Confirm your password</p>
			<input value={password2.value}
					type={password2.toggle_value ? "text" : "password"}
					onChange={password2.write}/>
			<button className="Hanging"
					onClick={password2.toggle}>
				{/* @TODO: Replace text with icon */}
				Toggle
			</button>
		</label>
	</>)
}
