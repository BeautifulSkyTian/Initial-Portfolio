import "./Footer.css"; 

function Footer(){
    const currentYear = new Date().getFullYear(); 

    return(
        <footer className="footer">
            <p>
                @ {currentYear} Tianqi Pan. Built with React.
            </p>

            <a href="#home">
                Back to top
            </a>
        </footer>
    ); 
}

export default Footer; 