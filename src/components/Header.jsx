// Header component, changes the hero section of each page

export default function Header({ children }) {
    return (

        <header id='hero'>
            <h2>{children}</h2>
        </header>

    )
}
