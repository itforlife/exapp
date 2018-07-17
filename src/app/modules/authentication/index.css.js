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
`;