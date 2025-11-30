import { ColorsSquare, Home2, Messages1, ProfileCircle, ReceiptItem } from 'iconsax-reactjs'

export const menuItems = [
  { path: '/', icon: Home2, labelKey: 'navbar.menu.home' },
  { path: '/my-account/point-details', icon: ProfileCircle, labelKey: 'navbar.menu.my' },
  { path: '/ai-diagnosis', icon: ColorsSquare, labelKey: 'navbar.menu.aiDiagnosis' },
  { path: '/message', icon: Messages1, labelKey: 'navbar.menu.message' },
  { path: '/reservation', icon: ReceiptItem, labelKey: 'navbar.menu.reservation' },
]
