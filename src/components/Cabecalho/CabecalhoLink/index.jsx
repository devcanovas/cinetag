import { NavLink } from "react-router-dom"
import styles from "./CabecalhoLink.module.scss"

export default function CabecalhoLink({ urlTo, children }) {
  return (
    <NavLink to={urlTo} className={styles.link}>
      {children}
    </NavLink>
  )
}
