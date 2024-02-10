import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import notes from "../notes.js"

//1. Import notes data
//2. Take props in the notes component
//3. loop notes dynamically
//4. Use arrow function

function App() {
    return (
        <div>
            <Header />
            {notes.map((note) => 
            <Note 
                key={note.id}
                title={note.title}
                content={note.content}
            />
            )}
            <Footer />
        </div>
    );
}

export default App;