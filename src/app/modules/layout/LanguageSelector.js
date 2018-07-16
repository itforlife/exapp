export const LanguageSelector = props => {
  return (
    <div>
      <ul>
        <li
          data-lang="en_EN"
          className="flag flag-gb"
          onClick={ev => props.onChangeLanguage(ev.target.dataset.lang)}
        >
          EN
        </li>
        <li
          data-lang="ro_RO"
          className="flag flag-ro"
          onClick={ev => props.onChangeLanguage(ev.target.dataset.lang)}
        >
          RO
        </li>
      </ul>
      <style jsx>
        {`
          .flag {
            display: inline-block;
            padding-left: 16px;
            background: url('static/assets/img/flags.png') no-repeat;
            cursoir: pointer;
          }

          .flag.flag-gb {
            background-position: -16px 0;
          }

          .flag.flag-ro {
            background-position: 0 -11px;
          }
        `}
      </style>
    </div>
  )
}
