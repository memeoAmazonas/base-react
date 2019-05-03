import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/iconHeader.scss';

class IconHeader extends React.PureComponent {
  render() {
    return (
      <div className="icon-header-container">
        <button className="icon-header-button" style={{ background: `url(${this.props.icon})` }} onClick={this.props.callToAction} />
        <button onClick={this.props.callToAction} className="icon-header-title">{this.props.title}</button>
      </div>
    );
  }
}

IconHeader.defaultProps = {
  icon: '',
  title: '',
  callToAction: null,
};

IconHeader.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  callToAction: PropTypes.func,
};

export default IconHeader;
