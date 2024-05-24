export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="main-footer py-5">
                <div className="container">
                    <h2 className="wordmark">
                        <span className="isotech">ISOTECH</span>
                        <span className="stratum">a <span className="semibold">Stratum Reservoir</span> brand</span>
                    </h2>

                    <p className="mb-0 mt-4">1308 Parkland Court<br/>
                        Champaign, Illinois 61821<br/>
                        Phone: 217-398-3490</p>
                </div>
            </div>
            <div className="copyright py-2">
                <div className="container">
                    <p className="mb-0">Copyright &copy; {year} Stratum Reservoir (Isotech) LLC</p>
                </div>
            </div>
        </footer>
    )
}