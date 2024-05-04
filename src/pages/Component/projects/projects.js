import React from "react";
import './projects.css';

import collagetails from '../../../images/projectImages/collagetails.png'

const Projects = ()=>{

    const projects_set = 

    [
        {
           img:collagetails,
           name:'Collage Tails',
           tech:'React Native , Django ',
           disc:"Its an dating app for collage student  where they can find a match with their selected traits and also from batch or branch etc.",
           link:null
        },
 
    ];
    return(

        <div className="skill_wrap" id='projects'>
            <p className="skill_Title">Projects</p>

      <div className="pro_set">

            {projects_set.map((pro,index)=>{
                return(
                    <div className="pro_Card" >
                    <div className="pro_img">
                        <img src={pro.img} alt='img'/>
                    </div>
                    <span>

                    <p className="pro_name">{pro.name}</p>
                    <p className="pro_tech">{pro.tech}</p>
                    <p className="pro_dics">{pro.disc}</p>
                    <button className="pro_btn">view</button>
                    </span>
                </div>
                );
            })}

            </div>

        </div>
    );
}
export default Projects;