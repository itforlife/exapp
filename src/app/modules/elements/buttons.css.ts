import css from 'styled-jsx/css'
import {colors} from '../../theme/index.css';

export const buttonsStyles = css`
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
`;