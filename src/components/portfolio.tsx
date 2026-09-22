const PORTFOLIO_ITEMS = [
    { img: "public/images/camera.webp",           alt: "Photography",  title: "photography",               description: "what i use to take pictures with" },
    { img: "public/images/books.jpeg",           alt: "Books I read",  title: "books",               description: "ones i've read and those in my tbr" },
]

export default function buildCard() {
  return (
    <footer
      style={{
        color: '#871515',
        padding: '1rem 2rem',
        textAlign: 'center',
      }}
    >
      <p>© 2026 Amadea Theola</p>
    </footer>
  );
}