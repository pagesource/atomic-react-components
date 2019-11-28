import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stories: []
        }
       this.page = 0;
       this.acceptCookies = this.acceptCookies.bind(this);
       this.closePopup = this.closePopup.bind(this);
       this.declineCookies = this.declineCookies.bind(this);
       let cookies = document.cookie.split(';') || [];
       this.cookieAvailable = false;
       this.footerRef = React.createRef();
       if(cookies.length>0) {
            for(var i=0; i < cookies.length;i++) {
                if(cookies[i].startsWith("decline") || cookies[i].startsWith("accept")){
                    this.cookieAvailable = true;
                }
            }
       }
    } 
    acceptCookies(obj){
        //alert("Cookies accepted");
        document.cookie = "accept"+obj.clientX+" = Cookie is accepted by" + obj.currentTarget.textContent + " button for " + obj.clientX;
        $('.footer').addClass('hide');
    }
    declineCookies(obj){
        document.cookie = "decline"+obj.clientX+" = Cookie is declined by" + obj.currentTarget.textContent + " button for " + obj.clientX;
        $('.footer').addClass('hide');
    }
    closePopup(){
        $('.footer').addClass('hide');
    }
    render() {
       
        return( 
        <div className="body">
        <footer id="footer" className="footer hide">
            <div className="footer-content">
                <div className="row">
                    <div className="col-xs-9">
                    <div className="footer-heading">
                        Privacy & Cookies Policy
                    </div>
                       <span className="footer-desc"> We use cookies to give you the best experience on our website. By continuing, you're agreeing to our use of cookies. We have recently updated our policy. </span>
                    <a href="#">Learn More</a>
                    </div>
                    <div className="col-xs-1 padding-none">
                    <button className="footer-btn" onClick={this.declineCookies}>
                        Decline
                    </button>
                    </div>
                    <div className="col-xs-2 padding-none">
                    <button className="footer-btn" onClick={this.acceptCookies}>
                        Accept & Continue -> 
                    </button>
                    
                    <div className="footer-close" onClick={this.closePopup}>X</div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
        );
    
    }
    componentDidMount(){
        if(!this.cookieAvailable) {
            $('#footer').toggleClass('hide');
          }
    }
}

export default Footer;