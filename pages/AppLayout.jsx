import styles from "../pages/AppLayout.module.css";
import Sidebar from "../src/Sidebar";
import Map from "../src/Map";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
