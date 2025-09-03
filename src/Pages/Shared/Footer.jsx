import jobIcon from"../../assets/icons8-new-job-undefined/icons8-new-job-100.png"

const Footer = () => {
    return (
       <div className="mt-12">
         <footer className="flex flex-col md:flex-row space-y-4 justify-around text-base-content p-10 footer border-t-2 border-b-2">
  <aside>
    <p>
        <img src={jobIcon} alt="logo" />
      Progo Industries Ltd.
      <br />
      Providing reliable tech since 2022
    </p>
  </aside>
  <nav className="flex flex-col">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by progo Industries Ltd</p>
  </aside>
</footer>
       </div>
    );
};

export default Footer;