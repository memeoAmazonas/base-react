import React from 'react';
import PropTypes from 'prop-types';

import '../sass/components/iconFooter.scss';

class IconFooter extends React.PureComponent {
  render() {
    return (
      <a href={this.props.urlIcon} className="icon-footer-container" target="_blank" rel="noopener noreferrer">
        <img className="icon-img" src={this.props.imgIcon} alt={this.props.imgIcon} />
        <div className="icon-title">
          <span>{this.props.titleIcon}</span>
        </div>
      </a>
    );
  }
}

IconFooter.defaultProps = {
  urlIcon: '#',
  imgIcon: '',
  titleIcon: '',
};

IconFooter.propTypes = {
  urlIcon: PropTypes.string,
  imgIcon: PropTypes.string,
  titleIcon: PropTypes.string,
};

export default IconFooter;

