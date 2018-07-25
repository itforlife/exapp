import css from 'styled-jsx/css'
import {colors} from '../../theme/index.css';

export const checkboxStyles = css`
$purple: ${colors.purple};
$c-facebook: ${colors['c-facebook']};
$c-twitter: ${colors['c-twitter']};
$white-color: ${colors['white-color']};
$primary-color: ${colors['primary-color']};
$orange: ${colors.orange};
$blue: ${colors.blue};
$breez: ${colors.breez};
$breez-light: ${colors['breez-light']};
$yellow: ${colors.yellow};
$smoke: ${colors.smoke};
$secondary-color: ${colors['secondary-color']};
$heading-color: ${colors['heading-color']};
$border-color: ${colors['border-color']};

$green: ${colors.green};
$grey: ${colors.grey};
$grey-light: ${colors['grey-light']};
$grey-lighter: ${colors['grey-lighter']};

.checkbox {
  display: inline-block;
  margin-bottom: 0;
  float: left;
}

// STYLES for checkboxes

.checkbox {
  margin-bottom: 1rem;
}
.checkbox label {
  cursor: pointer;
  padding-left: 0;
  margin-bottom: 0;
}
.form-group.is-focused .checkbox label {
  color: rgba(0,0,0, 0.26);
}
.form-group.is-focused .checkbox label:hover, .form-group.is-focused .checkbox label:focus {
  color: rgba(0,0,0, .54);
}
fieldset[disabled] .form-group.is-focused .checkbox label {
  color: rgba(0,0,0, 0.26);
}
.checkbox input[type=checkbox] {
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  left: 0;
  pointer-events: none;
}
.checkbox .checkbox-material {
  vertical-align: middle;
  position: relative;
  top: 1px;
  padding-right: 5px;
  display: inline-block;
}
.checkbox .checkbox-material:before {
  display: block;
  position: absolute;
  left: 0;
  content: "";
  background-color: rgba(0, 0, 0, 0.84);
  height: 20px;
  width: 20px;
  border-radius: 100%;
  z-index: 1;
  opacity: 0;
  margin: 0;
  top: 0;
  -webkit-transform: scale3d(2.3,2.3,1);
  -moz-transform: scale3d(2.3,2.3,1);
  -o-transform: scale3d(2.3,2.3,1);
  -ms-transform: scale3d(2.3,2.3,1);
  transform: scale3d(2.3,2.3,1);
}
.checkbox .checkbox-material .check {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid $border-color;
  overflow: hidden;
  z-index: 1;
}
.checkbox .checkbox-material .check:before {
  position: absolute;
  content: "";
  transform: rotate(45deg);
  display: block;
  margin-top: -3px;
  margin-left: 7px;
  width: 0;
  height: 0;
  background: red;
  box-shadow: 0 0 0 0 inset;
  -webkit-animation: checkbox-off 0.3s forwards;
  -moz-animation: checkbox-off 0.3s forwards;
  -o-animation: checkbox-off 0.3s forwards;
  -ms-animation: checkbox-off 0.3s forwards;
  animation: checkbox-off 0.3s forwards;
}
.checkbox input[type=checkbox]:focus + .checkbox-material .check:after {
  opacity: 0.2;
}
.checkbox input[type=checkbox]:checked + .checkbox-material .check {
  background: $primary-color;
}
.checkbox input[type=checkbox]:checked + .checkbox-material .check:before {
  color: #FFFFFF;
  box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;
  -webkit-animation: checkbox-on 0.3s forwards;
  -moz-animation: checkbox-on 0.3s forwards;
  -o-animation: checkbox-on 0.3s forwards;
  -ms-animation: checkbox-on 0.3s forwards;
  animation: checkbox-on 0.3s forwards;
}
.checkbox.clicked input[type=checkbox]:checked + .checkbox-material:before {
  -webkit-animation: rippleOn 500ms;
  -moz-animation: rippleOn 500ms;
  -o-animation: rippleOn 500ms;
  -ms-animation: rippleOn 500ms;
  animation: rippleOn 500ms;
}
.checkbox.clicked input[type=checkbox]:checked + .checkbox-material .check:after {
  -webkit-animation: rippleOn 500ms forwards;
  -moz-animation: rippleOn 500ms forwards;
  -o-animation: rippleOn 500ms forwards;
  -ms-animation: rippleOn 500ms forwards;
  animation: rippleOn 500ms forwards;
}
.checkbox.clicked input[type=checkbox]:not(:checked) + .checkbox-material:before {
  -webkit-animation: rippleOff 500ms;
  -moz-animation: rippleOff 500ms;
  -o-animation: rippleOff 500ms;
  -ms-animation: rippleOff 500ms;
  animation: rippleOff 500ms;
}
.checkbox.clicked input[type=checkbox]:not(:checked) + .checkbox-material .check:after {
  -webkit-animation: rippleOff 500ms;
  -moz-animation: rippleOff 500ms;
  -o-animation: rippleOff 500ms;
  -ms-animation: rippleOff 500ms;
  animation: rippleOff 500ms;
}
fieldset[disabled] .checkbox, fieldset[disabled] .checkbox input[type=checkbox],
.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check,
.checkbox input[type=checkbox][disabled] + .circle {
  opacity: 0.5;
}
.checkbox input[type=checkbox][disabled] ~ .checkbox-material .check {
  border-color: #000000;
  opacity: .26;
}
.checkbox input[type=checkbox][disabled] + .checkbox-material .check:after {
  background-color: rgba(0,0,0, 0.87);
  transform: rotate(-45deg);
}

@keyframes checkbox-on {
  0% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;
  }
  50% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;
  }
  100% {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0 0 20px, 0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;
  }
}
@keyframes rippleOn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
@keyframes rippleOff {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}

// END STYLES for checkboxes
`;