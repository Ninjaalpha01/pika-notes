import Header from "../components/Header";
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";

export default function HomePage() {
    return (
        <Layout>
            <div className="col">
                <Header />
                <NoteCard />
            </div>
        </Layout>
    );
}