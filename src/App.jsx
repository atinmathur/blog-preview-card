import './App.css'
import BlogImg from "./assets/illustration-article.svg";
import Avatar from "./assets/image-avatar.webp";
import PreviewCard from './components/PreviewCard'

function App() {

  return (
    <>
      <PreviewCard
        blogTitle="HTML & CSS foundations"
        blogImg={BlogImg}
        date="1 Dec 2023"
        preview="These languages are the backbone of every website, defining structure,
        content, and presentation."
        avatar={Avatar}
        author="Greg Hooper"
        tag="Learnings"
      />
    </>
  )
}

export default App
