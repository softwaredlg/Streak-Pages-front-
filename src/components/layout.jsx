import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, theme }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header theme={theme} />
            <main className={`
                    flex-1
                    ${theme.bgContent}                
                `}>
                {children}
            </main>
            <Footer theme={theme} />
        </div>
    )
}

export default Layout;