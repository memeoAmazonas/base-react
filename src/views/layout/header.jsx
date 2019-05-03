import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import strings from '../../components/strings';
import parameters from '../../assets/parameters';
import IconHeader from '../../components/iconHeader';

import '../../sass/utils.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      language: strings.english,
      visibilityLanguage: 'hidden',
      icon: parameters.iconLanguageEs,
    };
  }
  setDisplay() {
    this.state.visibility === 'hidden' ? this.setState({ visibility: 'visible' }) : this.setState({ visibility: 'hidden' });
  }
  setDisplayLanguage() {
    this.state.visibilityLanguage === 'hidden' ? this.setState({ visibilityLanguage: 'visible' }) : this.setState({ visibilityLanguage: 'hidden' });
  }
  setLanguage() {
    this.state.language === strings.english ? this.setState({ language: strings.spanish, icon: parameters.iconLanguageEn }) : this.setState({ language: strings.english, icon: parameters.iconLanguageEs });
  }
  scroollDown() {
    window.scrollBy(0, 1000);
  }
  render() {
    return (
      <div className="header" style={{ background: `url(${this.props.backgroundHeader})` }}>
        <div className="header-content">
          <div className="header-menu">
            <button className="header-menu-btn" onClick={() => (this.setDisplay())} />
            <div className="header-menu-item" style={{ visibility: this.state.visibility }}>
              <IconHeader icon={parameters.iconMenuHome} title={strings.home} />
              <IconHeader icon={parameters.iconMenuServices} title={strings.services} />
              <IconHeader icon={parameters.iconMenuProject} title={strings.project} />
              <IconHeader icon={parameters.iconMenuCommunity} title={strings.community} />
              <IconHeader icon={parameters.iconMenuGalery} title={strings.galery} />
              <IconHeader icon={parameters.iconMenuCar} title={strings.car} />
            </div>
          </div>
          <div className="header-logo">
            <div className="header-logo-img">
              <a href="/" />
            </div>
          </div>
          <div className="header-language">
            <div className="language-icon">
              <button className="btn-language-label" style={{ background: `url(${this.state.icon})` }} onClick={() => (this.setDisplayLanguage())} />
              <button className="btn-language-icon" onClick={() => (this.setDisplayLanguage())} />
            </div>
            <div className="btn-language-option" style={{ visibility: this.state.visibilityLanguage }}>
              <button className="btn-option" onClick={() => (this.setLanguage())}>{this.state.language}</button>
            </div>
          </div>
        </div>
        <div className="header-label">
          <p className="header-label-content">{strings.sloganHome}</p>
        </div>
        <div className="title-legend">
          <span>{strings.dBull}</span>
        </div>
        <div className="clear" />
        <div className="header-content-legend">
          <p className="content-legend">
            {strings.headerDbull}
          </p>
        </div>
        <div className="clear" />
        <div className="btn-content-legend">
          <button className="btn-legend">{strings.goDbull}</button>
        </div>
        <div className="clear" />
        <div className="header-arrow-down">
          <button className="btn-arrow-down" onClick={() => (this.scroollDown())} />
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  backgroundHeader: parameters.btnMenuPrincipal,
};

Header.propTypes = {
  backgroundHeader: PropTypes.string,
};

const mapStateToProps = state => ({
  backgroundHeader: state.header.backgroundHeader,
});

export default connect(mapStateToProps)(Header);

