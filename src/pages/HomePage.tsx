import Header from "../components/Header";
import Layout from "../components/Layout";
// import styles from "./styles/HomePage.module.css"

export default function HomePage() {
    return (
        <Layout>
            <div className="col">
                <Header />
                <div style={{ backgroundColor: "red" }}>Middle</div>
            </div>
        </Layout>
    );
}