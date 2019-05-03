import React from 'react';
import format from 'string-format';

import strings from '../../components/strings';
import parameters from '../../assets/parameters';
import IconFooter from '../../components/iconFooter';
import { formatPhoneNumber } from '../../utils/utils';

const Footer = () => (
  <div className="footer">
    <div className="left">
      <IconFooter imgIcon={parameters.btnInstagram} titleIcon={strings.instagramAccount} urlIcon={format(strings.instagramUrl, strings.instagramAccount.replace('@', ''))} />
      <IconFooter imgIcon={parameters.btnTitter} titleIcon={strings.twitterAccount} urlIcon={format(strings.twitterUrl, strings.twitterAccount.replace('@', ''))} />
      <IconFooter imgIcon={parameters.btnWhatsapp} titleIcon={strings.whatsappAccount} urlIcon={format(strings.whatsappUrl, formatPhoneNumber(strings.whatsappAccount))} />
      <IconFooter imgIcon={parameters.btnFacebook} titleIcon={strings.facebookAccount} urlIcon={format(strings.facebookUrl, strings.facebookAccount)} />
    </div>
    <div className="right">
      <div className="right-title">
        <span>{strings.contact.toUpperCase()}</span>
      </div>
      <div className="right-address-title">
        <span>{strings.addressTitle}</span>
      </div>
      <div className="right-address-content">
        <span>{strings.address}</span>
      </div>
    </div>
  </div>
);

export default Footer;

