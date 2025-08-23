import React from 'react'
import './Footer.scss'
import BaseContainer from '../base-container/BaseContainer'
import { BaseFlex } from '../base-flex/BaseFlex'
import { Divider } from 'antd'
import { BaseTypography } from '../base-typography/BaseTypography'
import { menuItems } from '../navbar/Navbar.utils'
import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="base-footer">
      <BaseContainer variant={1440}>
        <BaseFlex vertical gap="spacing-40px">
          <BaseFlex gap="spacing-40px" justify="space-between">
            <div>
              <BaseFlex vertical gap="spacing-60px">
                <div>
                  <BaseTypography
                    as="h1"
                    variant="aleo"
                    size="header5"
                    weight="bold"
                    color="inherit"
                    textTransform="uppercase"
                  >
                    Faceboard
                  </BaseTypography>
                </div>
                <div>
                  <BaseFlex gap="spacing-52px">
                    {menuItems.map((item, i) => (
                      <Link href={item.path} key={i}>
                        <BaseTypography as="p" size="subtitle1" textTransform="uppercase" color={'white'}>
                          {item.label}
                        </BaseTypography>
                      </Link>
                    ))}
                  </BaseFlex>
                </div>
              </BaseFlex>
            </div>
            <div>
              <BaseFlex vertical gap="spacing-32px">
                <div>
                  <BaseFlex vertical gap="spacing-8px">
                    <BaseTypography as="p" size="subtitle1" color="inherit" textTransform="uppercase">
                      CONTACT US
                    </BaseTypography>
                    <BaseTypography as="p" size="body1" color="inherit">
                      Keep up to date with everything Reflects
                    </BaseTypography>
                  </BaseFlex>
                </div>
                <div>
                  <input type="email" placeholder="Enter your email" className="footer__email-input-field" />
                </div>
                <div>
                  <BaseFlex gap="spacing-16px">
                    <Link href={'#'}>
                      <Image src="/icons/instagram-square-white.svg" width={40} height={40} alt="Instagram" />
                    </Link>
                    <Link href={'#'}>
                      <Image src="/icons/facebook-square-white.svg" width={40} height={40} alt="Facebook" />
                    </Link>
                  </BaseFlex>
                </div>
              </BaseFlex>
            </div>
          </BaseFlex>
          <Divider className="base-footer__divider" />
          <BaseFlex gap="spacing-40px" justify="space-between">
            <div>
              <BaseTypography as="p" size="body1" color="inherit" textTransform="uppercase">
                Faceboard, 2025 All Rights reserved.
              </BaseTypography>
            </div>
            <BaseFlex gap="spacing-44px" justify="space-between">
              <div>
                <BaseTypography as="p" size="body1" color="inherit" textTransform="uppercase">
                  Privacy Policy
                </BaseTypography>
              </div>
              <div>
                <BaseTypography as="p" size="body1" color="inherit" textTransform="uppercase">
                  Term and Condition
                </BaseTypography>
              </div>
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </BaseContainer>
    </div>
  )
}
