import styled from 'styled-components';

export const Box = styled.div`
* {
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
}

header {
    background-color: #1A2254;
    box-shadow: 0px 3px 10px #464646;
}

.nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 6rem;
}

.logo {
    display: flex;
    align-items: center;
}

.logo h1 {
    color: #fff;
}

.logo img {
  width: 145px
}

.nav-list {
    display: flex;
    align-items: center;
}

.nav-list ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

.nav-item {
    margin: 0 15px;
}

.nav-link {
    text-decoration: none;
    font-size: 1.15rem;
    color: #fff;
    font-weight: 400;
}

.login-button button {
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #0187a7;
}

.login-button button a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
}

.mobile-menu-icon {
    display: none;
}

.mobile-menu {
    display: none;
}

@media screen and (max-width: 730px) {

    .logo img {
      width: 110px;
      margin-top: -4px;
    }

    .nav-bar {
        padding: 1.5rem 4rem;
    }
    .nav-item {
        display: none;
    }
    .login-button {
        display: none;
    }
    .mobile-menu-icon {
        display: block;
    }
    .mobile-menu-icon button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #fff;
        font-size: 25px;
    }
    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;
    }
    .mobile-menu .nav-item {
        display: block;
        padding-top: 1.2rem;
    }
    .mobile-menu .login-button {
        display: block;
        padding: 1rem 2rem;
    }
    .mobile-menu .login-button button {
        width: 100%;
    }
    .open {
        display: block;
    }
}
`