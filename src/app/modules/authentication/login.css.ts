import css from 'styled-jsx/css'
import {colors} from '../../theme/index.css';

export const loginStyles = css`
$border-color: ${colors['border-color']};
$white-color: ${colors['white-color']};
$body-font-color: ${colors['body-font-color']};

.content {
    padding: 35px 25px;
}
.title {
    padding: 25px;
    margin-bottom: 0;
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
  p {
    margin-bottom: 0;
    font-size: 13px;
    }
`;