import React, { Component } from 'react';
import styles from './LoginSignUp.module.css';
import cx from 'classnames';

class LoginSignUp extends Component {
    state = {
        divPos: 1,
        sideDivPos: 70,
        contentDivPos: 0,
        sideDivWidth: 30,
        headerText: "Sign in to your account",
        contentToRender: true,

        phoneDivPos: 1,
        phoneMode: null,
        phoneHeight: 30,
        phoneTop: 70
    }

    componentWillMount() {
        const screenWidth = window.matchMedia("(max-width: 768px)");
        let phoneMode = screenWidth.matches;
        this.setState({ phoneMode });
    }

    sideChange = () => {
        let divPos = this.state.divPos;

        if (this.state.phoneMode) {
            this.divMove();
        }
        else {
            if (divPos === 1) {
                this.moveLeft();
            }
            else {
                this.moveRight();
            }
            divPos *= -1;
        }
        this.setState({ divPos });
    }

    moveLeft = () => {
        let count = 70;
        let sideDivPos = this.state.sideDivPos;
        let sideDivWidth = this.state.sideDivWidth;
        let contentDivPos = this.state.contentDivPos;
        let headerText = "Create Account Recording";
        let contentToRender = false;
        let id = setInterval(() => {
            if (count === 0.5) {
                clearInterval(id);
            }
            count -= 0.5;
            sideDivPos -= 0.5;
            contentDivPos += 0.2142857;
            if (count >= 35) {
                sideDivWidth += 0.5;
            }
            else {
                sideDivWidth -= 0.5;
            }
            if (count === 25) {
                this.setState({ contentToRender, headerText });
            }
            this.setState({ sideDivPos, sideDivWidth, contentDivPos });
        }, 5);
    }

    moveRight = () => {
        let count = 1;
        let sideDivPos = this.state.sideDivPos;
        let sideDivWidth = this.state.sideDivWidth;
        let contentDivPos = this.state.contentDivPos;
        let headerText = "Sign in to your account";
        let contentToRender = true;
        let id = setInterval(() => {
            if (count === 70.5) {
                clearInterval(id);
            }
            count += 0.5;
            sideDivPos += 0.5;
            contentDivPos -= 0.2142857;
            if (count <= 36) {
                sideDivWidth += 0.5;
            }
            else {
                sideDivWidth -= 0.5;
            }
            if (count === 25) {
                this.setState({ contentToRender, headerText });
            }
            this.setState({ sideDivPos, sideDivWidth, contentDivPos });
        }, 5);
        //return "right";
    }

    divMove = () => {
        let phoneDivPos = this.state.phoneDivPos * -1;
        let contentToRender = !this.state.contentToRender;
        let count = 0;
        let headerText;
        let phoneHeight = this.state.phoneHeight;
        let phoneTop = this.state.phoneTop;
        if (phoneDivPos === 1) {
            headerText = "Sign in to your account";
        }
        else {
            headerText = "Create Account Recording";
        }
        let id = setInterval(() => {
            if (count === 69.5) {
                clearInterval(id);
            }
            count += 0.5;
            if (count <= 35) {
                phoneHeight += 1;
                phoneTop -= 1;
            }
            else {
                phoneHeight -= 1;
                phoneTop += 1;
            }
            if (count === 35) {
                this.setState({ headerText,  contentToRender });
            }
            this.setState({ phoneHeight, phoneTop, phoneDivPos});
        }, 7);
        //return "right";
    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.contentContainer} style={{ left: (this.state.phoneMode ? "0%" : this.state.contentDivPos + "%") }}>
                    <div className={styles.headerText}>{this.state.headerText}</div>
                    <div className={styles.subHeaderText}>Sign in using social networking</div>
                    <div className={styles.iconContainer}>
                        <span className={cx(styles.icons, styles.iconF)}><i className="fab fa-facebook-f"></i></span>
                        <span className={cx(styles.icons, styles.iconG)}><i className="fab fa-google-plus-g"></i></span>
                        <span className={cx(styles.icons, styles.iconIn)}><i className="fab fa-linkedin-in"></i></span>
                    </div>
                    <div className={styles.orContainer}>
                        <hr />
                        <div className={styles.or}>OR</div>
                    </div>
                    <div className={styles.inputContainer}>
                        {this.state.contentToRender ?
                            <div>
                                <div className={styles.signIn}><input type="text" placeholder="Email" /></div>
                                <div className={styles.signIn}><input type="password" placeholder="Password" /></div>
                            </div> 
                            
                            :

                            <div>
                                boom
                            </div>
                            
                        }
                    </div>
                </div>
                <div className={styles.sideContainer} style={this.state.phoneMode ? { left: "0%", width: "100%", height: this.state.phoneHeight + "vh", top: this.state.phoneTop + "vh" } : { left: this.state.sideDivPos + "%", width: this.state.sideDivWidth + "%" }}>
                    <div className={styles.sideSubContainer}>
                        <div>Welcome</div>
                        <div></div>
                        <div></div>
                        <button className={styles.sideBtn} onClick={() => this.sideChange()}>click</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginSignUp;