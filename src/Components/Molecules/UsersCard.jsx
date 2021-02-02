import React from "react"

const UsersCard = ({names,username,email})=>(
    <>
     <article className="card">
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                    <h3 className="t5 s-mb-2 s-center"> {names} </h3>
                    <div className="s-mb-2 s-main-center">
                            <div className="card__teacher s-cross-center">
                            
                            <span className="s-mb-2 s-main-center"> {username}</span>
                            </div> 
                    </div>
                    {/* emmail */}
                        <div className="s-main-center">
                            <a className="button--ghost-alert button--tiny" href="https://github.com/HugoStevenPoveda/my-first-react">{`email: ${email}`}</a>
                        </div>
                </div>
     </article>



    </>






)

export default UsersCard