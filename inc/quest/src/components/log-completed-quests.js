import './log-completed-quests.scss';
import { __ } from '@wordpress/i18n';

export default function LogCompletedQuests() {
	/* eslint-disable @wordpress/i18n-no-variables */
	return (
		<>
			<div className="wapuugotchi_log__items">
				{ Object.values(
					window.extWapuugotchiLogData?.completed_quests
				).map( ( value, index ) => (
					<div
						key={ index }
						className="wapuugotchi_log__item wapuugotchi_log__completed"
					>
						<h2>{ __( value.title, 'wapuugotchi' ) }</h2>

						<p>
							{ __( 'Completed', 'wapuugotchi' ) +
								': ' +
								value.date }
						</p>
						<span>
							{ value.pearls }
							<img
								alt=""
								src="data:image/svg+xml;base64,PHN2ZwoJd2lkdGg9IjE3IgoJaGVpZ2h0PSIxMiIKCXZpZXdCb3g9IjAgMCAxNyAxMiIKCWZpbGw9Im5vbmUiCgl4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCj4KCTxwYXRoCgkJZD0iTTguODk2NDcgNC4yMzkyNkM2Ljc1OTcxIDQuMjM5MjYgNS4wMTYxMSA1Ljk4Mjg5IDUuMDE2MTEgOC4xMTk2MkM1LjAxNjExIDEwLjI1NjQgNi43NTk3NCAxMiA4Ljg5NjQ3IDEyQzExLjAzMzIgMTIgMTIuNzc2OCAxMC4yNTY0IDEyLjc3NjggOC4xMTk2MkMxMi43NzY4IDUuOTgyOTggMTEuMDMzMiA0LjIzOTI2IDguODk2NDcgNC4yMzkyNlpNMTAuNzQyNiA4LjY0OTU0QzEwLjQ1MjEgOC42NDk1NCAxMC4yMTI4IDguNDEwMjMgMTAuMjEyOCA4LjExOTY1QzEwLjIxMjggNy40MDE3IDkuNjE0NCA2LjgwMzM3IDguODk2NDcgNi44MDMzN0M4LjYwNTg5IDYuODAzMzcgOC4zNjY1OSA2LjU2NDA2IDguMzY2NTkgNi4yNzM0OUM4LjM2NjU5IDUuOTgyOSA4LjYwNTkgNS43NDM2IDguODk2NDcgNS43NDM2QzEwLjIxMjggNS43NDM2IDExLjI4OTYgNi44MjA1NiAxMS4yODk2IDguMTM2NzFDMTEuMjg5NiA4LjQxMDI1IDExLjA1MDMgOC42NDk1NyAxMC43NDI2IDguNjQ5NTdWOC42NDk1NFoiCgkJZmlsbD0iYmxhY2siCgkvPgoJPHBhdGgKCQlkPSJNNi4yNDY5OCAzLjExMTExQzYuMzMyNDcgMy4zMTYyIDYuNTM3NTYgMy40MzU5MyA2Ljc0MjY0IDMuNDM1OTNDNi44MTA5NyAzLjQzNTkzIDYuODc5NDEgMy40MTg4OCA2Ljk0Nzc0IDMuNDAxNzFDNy4yMjEyNyAzLjI4MTk5IDcuMzU4MDMgMi45NzQzNSA3LjIzODMyIDIuNzAwODJMNi43MjU0NyAxLjQ3MDA0QzYuNjA1NzUgMS4xOTY1MSA2LjI5ODEyIDEuMDc2OTEgNi4wMjQ1OCAxLjE3OTQ2QzUuNzUxMDUgMS4yOTkxNyA1LjYxNDI5IDEuNjA2ODEgNS43MzQgMS44ODAzNUw2LjI0Njk4IDMuMTExMTFaIgoJCWZpbGw9ImJsYWNrIgoJLz4KCTxwYXRoCgkJZD0iTTUuMjg5NjcgMy43NDM1NUwzLjkyMjExIDIuMzc1OTlDMy43MTcwMSAyLjE3MDg5IDMuMzc1MDMgMi4xNzA4OSAzLjE2OTk0IDIuMzc1OTlDMi45NjQ4NCAyLjU4MTA4IDIuOTY0ODQgMi45MjMwNiAzLjE2OTk0IDMuMTI4MTZMNC41Mzc0OSA0LjQ5NTcyQzQuNjQwMDQgNC41OTgyNiA0Ljc3NjgxIDQuNjQ5NTQgNC45MTM1NiA0LjY0OTU0QzUuMDUwMzIgNC42NDk1NCA1LjE4NzEgNC41OTgyNiA1LjI4OTYzIDQuNDk1NzJDNS40OTQ3MyA0LjI5MDYyIDUuNDk0NzYgMy45NjU4MyA1LjI4OTY3IDMuNzQzNTVaIgoJCWZpbGw9ImJsYWNrIgoJLz4KCTxwYXRoCgkJZD0iTTMuODg3ODMgNS40N0wyLjY1NzA2IDQuOTU3MTVDMi4zODM1MyA0LjgzNzQzIDIuMDc1ODkgNC45NzQyIDEuOTU2MTcgNS4yNDc3M0MxLjgzNjQ1IDUuNTIxMjYgMS45NzMyMiA1LjgyODkgMi4yNDY3NSA1Ljk0ODYyTDMuNDc3NTMgNi40NjE0N0MzLjU0NTg1IDYuNDk1NjkgMy42MTQzIDYuNDk1NjkgMy42ODI2MiA2LjQ5NTY5QzMuODg3NzIgNi40OTU2OSA0LjA5MjkxIDYuMzc1OTggNC4xNzgyOSA2LjE3MDg3QzQuMjgwOTYgNS44OTczNCA0LjE2MTI1IDUuNTcyNTMgMy44ODc4MyA1LjQ3WiIKCQlmaWxsPSJibGFjayIKCS8+Cgk8cGF0aAoJCWQ9Ik0zLjc4NTM2IDguMTE5NjFDMy43ODUzNiA3LjgyOTAyIDMuNTQ2MDUgNy41ODk3MiAzLjI1NTQ3IDcuNTg5NzJMMS4zMDY3NCA3LjU4OTZDMS4wMTYxNiA3LjU4OTYgMC43NzY4NTUgNy44Mjg5MSAwLjc3Njg1NSA4LjExOTQ5QzAuNzc2ODU1IDguNDEwMDYgMS4wMTYxNyA4LjY0OTM3IDEuMzA2NzQgOC42NDkzN0wzLjI1NTQ3IDguNjQ5NDlDMy41NDYwNSA4LjY0OTQ5IDMuNzg1MzYgOC40MTAxOCAzLjc4NTM2IDguMTE5NjFaIgoJCWZpbGw9ImJsYWNrIgoJLz4KCTxwYXRoCgkJZD0iTTMuNDc3NTIgOS43OTQ3N0wyLjI0Njc1IDEwLjMwNzZDMS45NzMyMSAxMC40MjczIDEuODM2NDYgMTAuNzM1IDEuOTU2MTYgMTEuMDA4NUMyLjA0MTY2IDExLjIxMzYgMi4yNDY3NSAxMS4zMzMzIDIuNDUxODMgMTEuMzMzM0MyLjUyMDE2IDExLjMzMzMgMi41ODg2IDExLjMxNjMgMi42NTY5MiAxMS4yOTkxTDMuODg3NyAxMC43ODYzQzQuMTYxMjMgMTAuNjY2NSA0LjI5Nzk5IDEwLjM1ODkgNC4xNzgyOCAxMC4wODU0QzQuMDU4NjkgOS44MTE4NCAzLjc1MTA2IDkuNjc1MDcgMy40Nzc1MiA5Ljc5NDc3WiIKCQlmaWxsPSJibGFjayIKCS8+Cgk8cGF0aAoJCWQ9Ik0xNS41NDYgMTAuMjkwNkwxNC4zMTUzIDkuNzc3N0MxNC4wNDE3IDkuNjU3OTkgMTMuNzM0MSA5Ljc5NDc1IDEzLjYxNDQgMTAuMDY4M0MxMy40OTQ3IDEwLjM0MTggMTMuNjMxNCAxMC42NDk1IDEzLjkwNSAxMC43NjkyTDE1LjEzNTcgMTEuMjgyQzE1LjIwNDEgMTEuMzE2MyAxNS4yNzI1IDExLjMxNjMgMTUuMzQwOCAxMS4zMTYzQzE1LjU0NTkgMTEuMzE2MyAxNS43NTExIDExLjE5NjUgMTUuODM2NSAxMC45OTE0QzE1LjkzOTIgMTAuNzE3OSAxNS44MTk2IDEwLjQxMDMgMTUuNTQ2IDEwLjI5MDZaIgoJCWZpbGw9ImJsYWNrIgoJLz4KCTxwYXRoCgkJZD0iTTE2LjQ4NjQgNy41ODk4NEgxNC41Mzc3QzE0LjI0NzEgNy41ODk4NCAxNC4wMDc4IDcuODI5MTYgMTQuMDA3OCA4LjExOTczQzE0LjAwNzggOC40MTAzMSAxNC4yNDcxIDguNjQ5NjIgMTQuNTM3NyA4LjY0OTYySDE2LjQ2OTRDMTYuNzU5OSA4LjY0OTYyIDE2Ljk5OTMgOC40MTAzMSAxNi45OTkzIDguMTE5NzNDMTcuMDE2MyA3LjgyOTI3IDE2Ljc3NyA3LjU4OTg0IDE2LjQ4NjQgNy41ODk4NEgxNi40ODY0WiIKCQlmaWxsPSJibGFjayIKCS8+Cgk8cGF0aAoJCWQ9Ik0xMy42MTQ1IDYuMTcxMDJDMTMuNyA2LjM3NjExIDEzLjkwNTEgNi40OTU4NCAxNC4xMTAyIDYuNDk1ODRDMTQuMTc4NSA2LjQ5NTg0IDE0LjI0NjkgNi40Nzg3OSAxNC4zMTUzIDYuNDYxNjJMMTUuNTQ2IDUuOTQ4NzZDMTUuODE5NiA1LjgyOTA1IDE1Ljk1NjMgNS41MjE0MSAxNS44MzY2IDUuMjQ3ODdDMTUuNzE2OSA0Ljk3NDM0IDE1LjQwOTMgNC44NTQ3NCAxNS4xMzU3IDQuOTU3MjlMMTMuOTA1IDUuNDcwMTRDMTMuNjMxNyA1LjU3MjY5IDEzLjUxMiA1Ljg5NzQ4IDEzLjYxNDUgNi4xNzEwMloiCgkJZmlsbD0iYmxhY2siCgkvPgoJPHBhdGgKCQlkPSJNMTQuNjM5OCAyLjM3NTk5QzE0LjQzNDcgMi4xNzA4OSAxNC4wOTI3IDIuMTcwODkgMTMuODg3NiAyLjM3NTk5TDEyLjUyIDMuNzQzNTVDMTIuMzE0OSAzLjk0ODY0IDEyLjMxNDkgNC4yOTA2MiAxMi41MiA0LjQ5NTcyQzEyLjYyMjYgNC41OTgyNiAxMi43NTkzIDQuNjQ5NTQgMTIuODk2MSA0LjY0OTU0QzEzLjAzMjkgNC42NDk1NCAxMy4xNjk2IDQuNTk4MjYgMTMuMjcyMiA0LjQ5NTcyTDE0LjYzOTcgMy4xMjgxNkMxNC44NDQ4IDIuOTIyOTUgMTQuODQ0OSAyLjU4MTA5IDE0LjYzOTggMi4zNzU5OVoiCgkJZmlsbD0iYmxhY2siCgkvPgoJPHBhdGgKCQlkPSJNMTAuODQ1MSAzLjQwMTgyQzEwLjkxMzQgMy40MzYwNCAxMC45ODE5IDMuNDM2MDQgMTEuMDUwMiAzLjQzNjA0QzExLjI1NTMgMy40MzYwNCAxMS40NjA1IDMuMzE2MzIgMTEuNTQ1OSAzLjExMTIyTDEyLjA1ODcgMS44ODA0NUMxMi4xNzg0IDEuNjA2OTEgMTIuMDQxNyAxLjI5OTI4IDExLjc2ODEgMS4xNzk1NkMxMS40OTQ2IDEuMDU5ODQgMTEuMTg3IDEuMTk2NjEgMTEuMDY3MiAxLjQ3MDE0TDEwLjU1NDQgMi43MDA5MkMxMC40NTIgMi45NzQ0NSAxMC41NzE2IDMuMjgyMjIgMTAuODQ1MSAzLjQwMTgyWiIKCQlmaWxsPSJibGFjayIKCS8+Cgk8cGF0aAoJCWQ9Ik04Ljg5NjU5IDMuMDA4NUM5LjE4NzE3IDMuMDA4NSA5LjQyNjQ3IDIuNzY5MTkgOS40MjY0NyAyLjQ3ODYxVjAuNTI5ODg3QzkuNDI2NDcgMC4yMzkzMDIgOS4xODcxNiAwIDguODk2NTkgMEM4LjYwNjAxIDAgOC4zNjY3IDAuMjM5MzExIDguMzY2NyAwLjUyOTg4N1YyLjQ2MTU1QzguMzY2NyAyLjc2OTE4IDguNjA2MDEgMy4wMDg1IDguODk2NTkgMy4wMDg1WiIKCQlmaWxsPSJibGFjayIKCS8+Cjwvc3ZnPgo="
							/>
						</span>
					</div>
				) ) }
			</div>
		</>
	);
}
