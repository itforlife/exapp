import css from 'styled-jsx/css'
import {colors} from '../../theme/index.css';

export const indexStyles = css`
$border-color: ${colors['border-color']};
$white-color: ${colors['white-color']};
$primary-color: ${colors['primary-color']};
$body-font-color: ${colors['body-font-color']};
$grey-lighter: ${colors['grey-lighter']};
$purple: ${colors.purple};
$c-facebook: ${colors['c-facebook']};
$c-twitter: ${colors['c-twitter']};
/*------------- #REGISTRATION-LOGIN-FORM --------------*/


.registration-login-form {
  border: 1px solid $border-color;
  border-radius: 0 5px 5px 0;
  background-color: $white-color;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  min-height: 700px;

  .nav-tabs {
    height: 100%;
    border: none;
  }

  .nav-item {
    margin-bottom: 0;
    height: 50%;
    display: table;
    width: 50%;

  }

  .nav-link {
		border-radius: 0;
		border: none;
		border-bottom: 1px solid $border-color;
		border-right: 1px solid $border-color;
		border-left: 1px solid $border-color;
		padding: 25px;
		color: #c0c4d8;
		fill: #c0c4d8;
		background-color: $white-color;
		height: 100%;
		display: table-cell;
		vertical-align: middle;

		&.active {
			fill: #fafbfd;
			background-color: #fafbfd;
			border-color: white;
		}

		svg {
			width: 21px;
			height: 21px	;
		}
  }

  .tab-content {
		overflow: hidden;
  }

  .content {
		padding: 35px 25px;
  }

  .title {
		padding: 25px;
		margin-bottom: 0;
  }

  p {
		margin-bottom: 0;
		font-size: 13px;
  }

  .remember {
		margin: 35px 0 25px
  }
}

.remember {
  margin-bottom: 1rem;

  a {
		line-height: 2;
  }

  .forgot {
		float: right;
		color: $body-font-color;
  }
}

.or {
  position: relative;
  width: 100%;
  height: 1px;
  margin: 1rem 0 2rem 0;
  background-color: $border-color;

  &:after {
	content: 'OR';
	display: block;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: $white-color;
	padding: 0 25px;
	font-size: 10px;
	z-index: 5;
  }
}

.form--login-logout {
  width: 100%;
  margin-right: 30px;

  form {
		justify-content: flex-end;
  }

  .form-control {
		background-color: #494c62;
		border: 0;
		color: $grey-lighter;
  }

  .login-btn-responsive {
		display: none;
  }

  button.btn {
		padding: .578rem 2.1rem;
  }
}


/*================= Responsive Mode ============*/


@media (max-width: 1023px) {
  .registration-login-form {
		padding-left: 0;
  }

  .registration-login-form .nav-tabs {
		bottom: auto;
		height: auto;
		width: 100%;
  }

  .registration-login-form .nav-item {
		height: 100%;
		display: block;
		width: 50%;
		float: left;
		text-align: center;
  }

  .registration-login-form .nav-link {
		display: block;
  }

  .registration-login-form .nav-item:last-child .nav-link {
		border-bottom: 1px solid #e6ecf5;
  }
}

@media (max-width: 580px) {
  .form--login-logout {
		text-align: right;

		form {
			display: none;
		}

		.btn {
			display: none;
			margin-bottom: 0;

			&.login-btn-responsive {
			display: inline-block;
			padding: .6rem 1.5rem;
			}
		}
  }
}
`;