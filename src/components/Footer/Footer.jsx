import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <svg id="wave" viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#171738" d="M0,20L40,43.3C80,67,160,113,240,133.3C320,153,400,147,480,130C560,113,640,87,720,90C800,93,880,127,960,120C1040,113,1120,67,1200,60C1280,53,1360,87,1440,90C1520,93,1600,67,1680,50C1760,33,1840,27,1920,23.3C2000,20,2080,20,2160,23.3C2240,27,2320,33,2400,56.7C2480,80,2560,120,2640,133.3C2720,147,2800,133,2880,126.7C2960,120,3040,120,3120,130C3200,140,3280,160,3360,156.7C3440,153,3520,127,3600,103.3C3680,80,3760,60,3840,60C3920,60,4000,80,4080,76.7C4160,73,4240,47,4320,53.3C4400,60,4480,100,4560,123.3C4640,147,4720,153,4800,133.3C4880,113,4960,67,5040,40C5120,13,5200,7,5280,16.7C5360,27,5440,53,5520,76.7C5600,100,5680,120,5720,130L5760,140L5760,200L5720,200C5680,200,5600,200,5520,200C5440,200,5360,200,5280,200C5200,200,5120,200,5040,200C4960,200,4880,200,4800,200C4720,200,4640,200,4560,200C4480,200,4400,200,4320,200C4240,200,4160,200,4080,200C4000,200,3920,200,3840,200C3760,200,3680,200,3600,200C3520,200,3440,200,3360,200C3280,200,3200,200,3120,200C3040,200,2960,200,2880,200C2800,200,2720,200,2640,200C2560,200,2480,200,2400,200C2320,200,2240,200,2160,200C2080,200,2000,200,1920,200C1840,200,1760,200,1680,200C1600,200,1520,200,1440,200C1360,200,1280,200,1200,200C1120,200,1040,200,960,200C880,200,800,200,720,200C640,200,560,200,480,200C400,200,320,200,240,200C160,200,80,200,40,200L0,200Z"></path></svg>
            <footer>
                <p>© 2021 scorchteam.com</p>
                <div><p style={{ color: 'var(--pallette-electric-blue)', margin: '0 1rem 0 0', padding: 0, display: "inline" }}>{'\u2022'}</p>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>

    );
}

export default Footer;