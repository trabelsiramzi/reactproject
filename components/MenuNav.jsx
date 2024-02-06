import Link from 'next/link';
import styles from "./MenuNav.module.css";

export default function MenuNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href={'/OneChampionship'}>ONE Championship</Link>
                </li>
                <li>
                    <Link href="/ufc">UFC</Link>
                </li>
            </ul>
        </nav>
    );
}
