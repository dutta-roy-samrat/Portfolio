import React from "react";
import Card from '../../components/Card'
import styles from './styles.module.css'
export default function Resume(){
    React.useEffect(()=>window.scrollTo(0,0),[])
    return(
        <div className={styles.resume_section}>
            <h1 className={styles.resume}><span className={styles.blue_dot}> </span>Resume</h1>
            
            <div className={styles.exp_section}>
            <div className={styles.resume_access}>
                <h3 className={styles.exp}>Experience</h3>
                <a href='https://novoresume.com/editor/resume/5feebbb0-e3f3-11e9-94d2-e5189d55abd7' target='_blank'><button className={styles.cv}>DOWNLOAD CV</button></a>
            </div>
            <Card render={()=>(
                <>
                    <p className={styles.date}>2021-Present</p>
                    <p className={styles.job_pos}>SENIOR ANALYST</p>
                    <p className={styles.company}>Capgemini India Pvt. Ltd.</p>
                    <p className={styles.location}>Bangalore</p>
                </>
            )} className={styles.card}
            />
            </div>
            <div className={styles.edu_section}>   
                <h3 className={styles.edu}>Education</h3>
                <Card render={()=>(
                    
                <>
                        <p className={styles.edu}>2017-2021</p>
                        <p className={styles.institute}>NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR</p>
                        <p className={styles.degree}>Bachelor Of Technolgy</p>
                        <p className={styles.location}>Silchar,Assam</p>
        
                        <p className={styles.date}>2014-2016</p>
                        <p className={styles.job_pos}>RAMANUJ GUPTA JUNIOR COLLEGE</p>
                        <p className={styles.company}>Senior Secondary</p>
                        <p className={styles.location}>Silchar,Assam</p>
                        
                        <p className={styles.date}>2002-2014</p>
                        <p className={styles.job_pos}>ST. MARY'S SCHOOL</p>
                        <p className={styles.company}>Secondary</p>
                        <p className={styles.location}>Hailakandi,Assam</p>
                        
                    </>
                    
                )} className={styles.card}
                />
            </div>
            <div className={styles.skills}>
                <Card render={()=>(
                    <>
                        <p className={styles.prof_header}>Professional Skillset</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}> </span>React</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}> </span>HTML</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}> </span>CSS</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}> </span>C++</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}> </span>OOPs</p>
                        <p className={styles.lang_header}>Languages</p>
                        <p className={styles.lang}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}> </span>English (proficient)</p>
                        <p className={styles.lang}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}> </span>Bengali (native)</p>
                        <p className={styles.lang}><span className={styles.blue_dot} style={{width:'13px',height:'13px'}}></span>Hindi (proficient)</p>
                    </>
                )} className={styles.skillsCard}
                />
            </div>
        </div>
    )
}