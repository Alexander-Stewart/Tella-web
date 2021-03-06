import { MdCloudUpload } from '@react-icons/all-files/md/MdCloudUpload'
import { MdPersonOutline } from '@react-icons/all-files/md/MdPersonOutline'
import { MdSettings } from '@react-icons/all-files/md/MdSettings'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { MdExitToApp } from '@react-icons/all-files/md/MdExitToApp'
import { MdHelp } from '@react-icons/all-files/md/MdHelp'
import { MenuDescription } from '../domain/Menu'

export const ExampleMenuMokedData: MenuDescription[] = [
  { text: 'Reports', icon: <MdCloudUpload />, selected: true },
  { text: 'Users', icon: <MdPersonOutline /> },
  { text: 'Administration', icon: <MdSettings /> },
  { text: 'Delete report', icon: <MdDelete />, disabled: true },
]

export const TopMenuMokedData: MenuDescription[] = [
  { text: 'Reports', icon: <MdCloudUpload />, selected: true },
  { text: 'Users', icon: <MdPersonOutline /> },
  { text: 'Administration', icon: <MdSettings /> },
]

export const BottomMenuMokedData: MenuDescription[] = [
  { text: 'Settings', icon: <MdSettings /> },
  { text: 'Help', icon: <MdHelp /> },
  { text: 'Logout', icon: <MdExitToApp /> },
]
