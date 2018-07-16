import css from 'styled-jsx/css'
import {colors} from '../../theme/index.css';

export const indexStyles = css`
$purple: ${colors.purple};
$c-facebook: ${colors['c-facebook']};
$c-twitter: ${colors['c-twitter']};
$white-color: ${colors['white-color']};
$primary-color: ${colors['primary-color']};
$orange: ${colors['orange']};
$blue: ${colors['blue']};
$breez: ${colors['breez']};
$breez-light: ${colors['breez-light']};
$yellow: ${colors['yellow']};
$smoke: ${colors['smoke']};
$secondary-color: ${colors['secondary-color']};
$heading-color: ${colors['heading-color']};
$border-color: ${colors['border-color']};

$green: ${colors['green']};
$grey: ${colors['grey']};
$grey-light: ${colors['grey-light']};
$grey-lighter: ${colors['grey-lighter']};

/*------------- #BUTTONS --------------*/
.bg-facebook {
    background-color: $c-facebook;
  }
  
  .bg-twitter {
    background-color: $c-twitter;
  }
.full-width {
    width: 100%;
}
.btn {
  color: $white-color;
  margin-bottom: 15px;
  position: relative;

  &:hover {
    opacity: .8;
    color: $white-color;
  }

  &:focus {
    box-shadow: none;
  }

  &.c-grey {
    border-color: #d8dbe6;

    &:hover {
      color: inherit;
    }
  }

  &.disabled, &:disabled {
    background-color: #9a9fbf;
    border-color: #9a9fbf;
  }
}

.btn-transparent {
  background-color: transparent;
}

button:hover {
  cursor: pointer;
}

.btn-icon-left {
  i, svg {
    font-size: 12px;
    margin-right: 10px;
  }
}

.btn-lg {
  i, svg {
    font-size: 16px;
  }
}

@media (max-width: 1080px) {
  .btn-lg {
    padding: 1rem;
  }
}

.btn-md {
  padding: 1rem 3.5rem;
  font-size: 0.75rem;
  border-radius: 0.3rem;
}

@media (max-width: 1080px) {
  .btn-md {
    padding: .6rem .5rem;
  }
}

.btn-md-2 {
  padding: .8rem 2.1rem;
  font-size: 0.688rem;
  border-radius: 0.3rem;
}

@media (max-width: 1080px) {
  .btn-md-2 {
    padding: .6rem .5rem;
  }
}

.btn-control {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  line-height: 54px;
  padding: 0;
  fill: $white-color;
  font-size: 20px;

  &:hover {
    opacity: 1;
  }

  .more-dropdown {
    top: auto;
    bottom: 100%;

    li {
      line-height: 1.3;
      font-size: 12px;
    }
  }

  & > i, svg {
    font-size: 20px;
    width: 20px;
    height: 20px;
  }

  &.has-i {
    font-size: unset;

    & > i, svg {
      font-size: 15px;
      width: 15px;
      height: 15px;
    }
  }

  &.btn-more {
    line-height: 54px;
  }
}

.btn-control-small {
  width: 34px;
  height: 34px;
  line-height: 34px;

  & > i, svg {
    font-size: 16px;
    width: 16px;
    height: 16px;
  }
}

.btn-more {
  background-color: #ccd1e0;
  margin: 40px auto;
  text-align: center;
  display: block;
  line-height: 40px;
  transition: all .3s ease;

  &:hover {
    fill: $primary-color;
  }
}

.btn-border {
  border: solid 2px;
}

.btn-border-think {
  border: solid 1px;
}

.control-block-button {
  position: absolute;

  .btn-control {
    margin-right: 20px;
    margin-bottom: 0;
    fill: $white-color;

    &:last-child {
      margin-right: 0;
    }

    .olymp-settings-icon {
      width: 17px;
      height: 21px;
    }

    .olymp-happy-face-icon {
      width: 21px;
      height: 21px;
    }

    .olymp-chat---messages-icon {
      width: 23px;
      height: 20px;
    }

    .olymp-star-icon {
      height: 20px;
      width: 20px;
    }

    .olymp-happy-faces-icon {
      height: 22px;
      width: 22px;
    }
  }
}

.btn-primary:hover {
  background-color: $orange;
  border-color: $orange;
  opacity: 1;
}

.btn-secondary:hover {
  background-color: $primary-color;
  border-color: $primary-color;
  opacity: 1;
}

.btn-purple {
  background-color: $purple;
}

.btn-blue {
  background-color: $blue;
}

.btn-breez {
  background-color: $breez;
}

.btn-green {
  background-color: $green;
}

.btn-grey {
  background-color: $grey;
}

.btn-grey-light {
  background-color: $grey-light;
}

.btn-grey-lighter {
  background-color: $grey-lighter;
}

.btn-breez-light {
  background-color: $breez-light;
}

.btn-yellow {
  background-color: $yellow;
}

.btn-smoke {
  background-color: $smoke;
}

.btn-bg-secondary {
  background-color: $secondary-color;
}

.btn-light-bg {
  color: $heading-color;

  &:hover {
    color: $heading-color;
  }

  &:focus {
    color: $heading-color;
  }
}

.btn-market {
  text-transform: none;
  text-align: left;
  padding: 13px 23px;
  background-color: #000;

  .icon {
    margin-right: 5px;
    height: 35px;
    width: 35px;
  }

  > * {
    display: inline-block;
    vertical-align: middle;
  }

  .text {
    overflow: hidden;
  }

  span {
    display: block;
  }

  .sup-title {
    font-size: 9px;
    font-weight: 700;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
  }

  &:after {
    box-shadow: 10px 0 15px 0 rgba(18,25,33, 0.3);
  }

  & + .btn-market {
    margin-left: 20px;
  }
}

.with--icon {
  text-align: left;

  .icon {
    margin-right: 12px;
    height: 35px;
    width: 35px;
    fill: $white-color;
  }

  > * {
    display: inline-block;
    vertical-align: middle;
  }

  .text {
    overflow: hidden;
  }

  span {
    display: block;
  }

  .sup-title {
    font-size: 8px;
    font-weight: 700;
  }

  .title {
    font-size: 14px;
    font-weight: 700;
  }

  &:after {
    box-shadow: 10px 0 15px 0 rgba(18,25,33, 0.3);
  }

  &.btn-md {
    .icon {
      margin-right: 15px;
      height: 22px;
      width: 22px;
    }
  }
}


/*------------- #BUTTONS-action with icons --------------*/

.icon-add {
  position: relative;
  display: inline-block;
  margin-right: 12px;
  vertical-align: middle;

  &:after {
    content: '\f067';
    display: block;
    position: absolute;
    right: -4px;
    top: -4px;
    color: inherit;
    font-size: 7px;
    font-family: 'Font Awesome 5 Free';
  }

  &.without-text {
    margin-right: 0;
  }
}

.icon-minus {
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &:after {
    content: '\f068';
    display: block;
    position: absolute;
    right: -4px;
    top: -4px;
    color: inherit;
    font-size: 7px;
    font-family: 'Font Awesome 5 Free';
  }
}

.accept-request {
  display: inline-block;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem;
  font-size: 0.688rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  background-color: $blue;
  color: $white-color;
  fill: $white-color;

  &:hover, &:focus {
    color: $white-color;
    fill: $white-color;
    opacity: .9;
  }

  & + .accept-request {
    margin-left: 8px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
}

.request-del {
  background-color: $grey-lighter;
}

.fav-pages {
  background-color: $primary-color;
}

.chat-message {
  background-color: $purple;
}

.btn--half-width {
  width: 48%;
}

/*------------- #Button back-to-top --------------*/


.back-to-top {
  position: fixed;
  z-index: 19;
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: block;
  fill: $white-color;
  stroke: inherit;
  transition: all .3s ease;
  bottom: 10px;
  right: 85px;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(63, 66, 87, 0.4);
  border-radius: 100%;
  background-color: $primary-color;
  text-align: center;

  &.hidden {
    opacity: 0;
  }

  .back-icon {
    height: 20px;
    width: 20px;
  }
}



/*================= Responsive Mode ============*/


@media (max-width: 768px) {
  .back-to-top {
    width: 40px;
    height: 40px;
    line-height: 40px;
    right: 10px;

    .back-icon {
      height: 15px;
      width: 15px;
    }
  }
}

@media (max-width: 410px) {
  .btn-market + .btn-market {
    margin-left: 0;
  }
}

@media (max-width: 360px) {
  .btn-control .more-dropdown {
    top: 100%;
    bottom: auto;
  }
}

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