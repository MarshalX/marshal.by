import { css } from "@emotion/core"

import "../../static/bootstrap.min.css"

const main = css`
  body {
    /*font-family: 'Lato', serif;*/
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    font-family: "Montserrat", serif;
  }

  hr.star-light,
  hr.star-dark {
    max-width: 15rem;
    padding: 0;
    text-align: center;
    border: none;
    border-top: solid 0.25rem;
    margin: 2.5rem auto;
  }

  hr.star-light:after,
  hr.star-dark:after {
    position: relative;
    top: -0.8em;
    display: inline-block;
    padding: 0 0.25em;
    content: "\\f005";
    font-family: "Font Awesome 5 Free", serif;
    font-weight: 900;
    font-size: 2em;
  }

  hr.star-light {
    border-color: #fff;
  }

  hr.star-light:after {
    color: #fff;
    background-color: #ff5a00;
  }

  hr.star-dark {
    border-color: #000000;
  }

  hr.star-dark:after {
    color: #000000;
    background-color: white;
  }

  section {
    padding: 6rem 0;
  }

  section h2 {
    font-size: 2.25rem;
    line-height: 2rem;
  }

  @media (min-width: 992px) {
    section h2 {
      font-size: 3rem;
      line-height: 2.5rem;
    }
  }

  .btn-xl {
    padding: 1rem 1.75rem;
    font-size: 1.25rem;
  }

  .btn-fixed {
    width: 3.25rem;
    height: 3.25rem;
    font-size: 1.25rem;
    line-height: 2.35rem;
  }

  .scroll-to-top {
    z-index: 1042;
    right: 1rem;
    bottom: 1rem;
    display: none;
  }

  .scroll-to-top a {
    width: 3.5rem;
    height: 3.5rem;
    background-color: rgba(33, 37, 41, 0.5);
    line-height: 3.1rem;
  }

  #mainNav {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 700;
    font-family: "Montserrat", serif;
  }

  #mainNav .navbar-brand {
    color: #fff;
  }

  #mainNav .navbar-nav {
    margin-top: 1rem;
    letter-spacing: 0.0625rem;
  }

  #mainNav .navbar-nav li.nav-item a.nav-link {
    color: #fff;
  }

  #mainNav .navbar-nav li.nav-item a.nav-link:hover {
    color: #ff5a00;
  }

  #mainNav .navbar-nav li.nav-item a.nav-link:active,
  #mainNav .navbar-nav li.nav-item a.nav-link:focus {
    color: #fff;
  }

  #mainNav .navbar-nav li.nav-item a.nav-link.active {
    color: #ff5a00;
  }

  #mainNav .navbar-toggler {
    font-size: 80%;
    padding: 0.8rem;
  }

  @media (min-width: 992px) {
    #mainNav {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      -webkit-transition: padding-top 0.3s, padding-bottom 0.3s;
      transition: padding-top 0.3s, padding-bottom 0.3s;
    }

    #mainNav .navbar-brand {
      font-size: 2em;
      -webkit-transition: font-size 0.3s;
      transition: font-size 0.3s;
    }

    #mainNav .navbar-nav {
      margin-top: 0;
    }

    #mainNav .navbar-nav > li.nav-item > a.nav-link.active {
      color: #fff;
      background: #ff5a00;
    }

    #mainNav .navbar-nav > li.nav-item > a.nav-link.active:active,
    #mainNav .navbar-nav > li.nav-item > a.nav-link.active:focus,
    #mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover {
      color: #fff;
      background: #ff5a00;
    }

    #mainNav.navbar-shrink {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    #mainNav.navbar-shrink .navbar-brand {
      font-size: 1.5em;
    }
  }

  header.masthead {
    padding-top: calc(6rem + 72px);
    padding-bottom: 6rem;
  }

  header.masthead h1 {
    font-size: 3rem;
    line-height: 3rem;
  }

  header.masthead h2 {
    font-size: 1.3rem;
    /*font-family: 'Lato', serif;*/
  }

  @media (min-width: 992px) {
    header.masthead {
      padding-top: calc(6rem + 106px);
      padding-bottom: 6rem;
    }

    header.masthead h1 {
      font-size: 3.75em;
      /*font-size: 4.75em;*/
      line-height: 4rem;
    }

    header.masthead h2 {
      font-size: 1.5em;
      /*font-size: 1.75em;*/
    }
  }

  .lead-0 {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.15;
  }

  .lead {
    text-indent: 2em;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.15;
    margin: 0 0 0.25rem;
  }

  .portfolio {
    margin-bottom: -15px;
  }

  .portfolio .portfolio-item {
    position: relative;
    display: block;
    max-width: 25rem;
    margin-bottom: 15px;
  }

  .portfolio .portfolio-item .portfolio-item-caption {
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    opacity: 0;
    background-color: rgba(255, 90, 0, 0.9);
  }

  .portfolio .portfolio-item .portfolio-item-caption:hover {
    opacity: 1;
  }

  .portfolio
    .portfolio-item
    .portfolio-item-caption
    .portfolio-item-caption-content {
    font-size: 1.5rem;
  }

  @media (min-width: 576px) {
    .portfolio {
      margin-bottom: -30px;
    }

    .portfolio .portfolio-item {
      margin-bottom: 30px;
    }
  }

  .portfolio-modal .portfolio-modal-dialog {
    padding: 3rem 1rem;
    min-height: calc(100vh - 2rem);
    margin: 1rem calc(1rem - 8px);
    position: relative;
    z-index: 2;
    -webkit-box-shadow: 0 0 3rem 1rem rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 3rem 1rem rgba(0, 0, 0, 0.5);
  }

  .portfolio-modal .portfolio-modal-dialog .close-button {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .portfolio-modal .portfolio-modal-dialog .close-button i {
    line-height: 38px;
  }

  .portfolio-modal .portfolio-modal-dialog h2 {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    .portfolio-modal .portfolio-modal-dialog {
      min-height: 100vh;
      padding: 5rem;
      margin: 3rem calc(3rem - 8px);
    }

    .portfolio-modal .portfolio-modal-dialog h2 {
      font-size: 3rem;
    }
  }

  .floating-label-form-group {
    position: relative;
    border-bottom: 1px solid #e9ecef;
  }

  .floating-label-form-group input,
  .floating-label-form-group textarea {
    font-size: 1.5em;
    position: relative;
    z-index: 1;
    padding-right: 0;
    padding-left: 0;
    resize: none;
    border: none;
    border-radius: 0;
    background: none;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .floating-label-form-group label {
    font-size: 0.85em;
    line-height: 1.764705882em;
    position: relative;
    z-index: 0;
    top: 2em;
    display: block;
    margin: 0;
    -webkit-transition: top 0.3s ease, opacity 0.3s ease;
    transition: top 0.3s ease, opacity 0.3s ease;
    vertical-align: baseline;
    opacity: 0;
  }

  .floating-label-form-group:not(:first-child) {
    padding-left: 14px;
    border-left: 1px solid #e9ecef;
  }

  .floating-label-form-group-with-value label {
    top: 0;
    opacity: 1;
  }

  .floating-label-form-group-with-focus label {
    color: #ff5a00;
  }

  form .row:first-child .floating-label-form-group {
    border-top: 1px solid #e9ecef;
  }

  .footer {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: #373737;
    color: #fff;
  }

  .copyright {
    background-color: #000000;
  }

  a {
    color: #ff5a00;
  }

  a:focus {
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: #d75100;
    text-decoration: none;
  }

  a:not([href]) {
    color: #ffffff;
  }

  .btn {
    border-width: 2px;
  }

  .bg-primary {
    background-color: #ff5a00 !important;
  }

  .bg-secondary {
    background-color: #000000 !important;
  }

  .text-primary {
    color: #ff5a00 !important;
  }

  .text-secondary {
    color: #000000 !important;
  }

  .btn-primary {
    outline-color: #ff5a00;
    background-color: #ff5a00;
    border-color: #ff5a00;
  }

  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active,
  .btn-primary:disabled,
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled):active:focus {
    outline-color: #ff5a00;
    box-shadow: 0 0 0 0.2rem rgba(255, 90, 0, 0.5);
    background-color: #d75100;
    border-color: #d75100;
  }

  #fixed:active {
    background-color: #d75100;
    border-color: #d75100;
  }

  #fixed:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 90, 0, 0.9);
  }

  .btn-secondary {
    background-color: #000000;
    border-color: #000000;
  }

  .btn-secondary:hover,
  .btn-secondary:focus,
  .btn-secondary:active {
    background-color: #282828;
    border-color: #282828;
  }

  .border-2 {
    border: 2px solid #dee2e6 !important;
  }

  .fab {
    display: contents;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }

  .bg-primary li {
    font-size: 1.15rem;
    font-weight: 300;
    font-family: "Montserrat", serif;
    line-height: 1.15;
  }

  .card {
    min-width: 290px;
  }
`

export default main