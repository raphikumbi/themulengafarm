import React from 'react';
import './VideoPage.css';
import VideoButton from "../../components/button/video-button/VideoButton.jsx";

import christmas2025 from "../../../public/photos/videoPage/christmas2025.png";
import october2025 from "../../../public/photos/videoPage/october2025.png";
import october2025en from "../../../public/photos/videoPage/ocotber2025en.png";
import september2025 from "../../../public/photos/videoPage/september2025.png";
import april2025 from "../../../public/photos/videoPage/april2025.png"; // TODO
import january2025 from "../../../public/photos/videoPage/january2025.png"

export default function VideoPage() {
    return (
        <div className="page-container">
            <div className="content-width">

                <div className="video-container">
                    <div className="video-container-background">
                        <div className="video-yt">
                            <VideoButton thumbnail={christmas2025}
                                         url="https://www.youtube.com/embed/75ftg_fsrLQ"
                                         title={"Christmas 2025"}
                            />
                        </div>
                        <div className="text-container">
                            <h2>Infrastructure Development and Agricultural Expansion Progress</h2>

                            <ul>
                                <li>Continued construction of training center (classrooms, doors, facilities)</li>
                                <li>Expansion of water system, including setup for irrigation (water tank planned)</li>
                                <li>Sanitation system connected and improved</li>
                                <li>Ongoing planting of fruit trees (citrus, avocados, bananas)</li>
                                <li>Preparation for 2026 expansion to larger farmland</li>
                                <li>Future needs include fencing, irrigation, and full farm infrastructure</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="video-container">
                    <div className="video-container-background">
                        <div className="video-yt">
                            <VideoButton thumbnail={october2025}
                                         url="https://www.youtube.com/embed/qun6GCE8jnA"
                                         title={"October 2025"}
                            />
                        </div>
                        <div className="text-container">
                            <h2>Sustainable Farm Development and Training Center Completion Update</h2>

                            <ul>
                                <li>Training center construction largely completed (windows, electricity, doors), finishing work still ongoing</li>
                                <li>Over 30 varieties of fruit trees planted (oranges, grapefruits...)</li>
                                <li>Expansion of avocado and banana cultivation for future commercial farming</li>
                                <li>Progress toward a self-sustaining commercial farm model</li>
                                <li>Upcoming work: completion of school building and water systems (pumps and reservoir)</li>
                                <li>Installation of solar panels to address electricity shortages</li>
                                <li>Fundraising campaign ongoing (about €1500 raised of €4000 goal)</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="video-container">
                    <div className="video-container-background">
                        <div className="video-yt">
                            <VideoButton thumbnail={october2025en}
                                         url="https://www.youtube.com/embed/v-dba81kDMg"
                                         title={"October 2025"}
                            />
                        </div>
                        <div className="text-container">
                            <h2>Crowdfunding Progress and Upcoming Infrastructure Development Plan</h2>

                            <ul>
                                <li>Crowdfunding campaign launched one week ago to support upcoming work</li>
                                <li>€1500 raised so far out of €4000 target (€2500 remaining)</li>
                                <li>Planned 3-week on-site work in November to complete key infrastructure</li>
                                <li>Completion of training center construction</li>
                                <li>Finalization of groundwater well (securing and pump installation)</li>
                                <li>Installation of solar panel system to reduce power dependency</li>
                                <li>Ongoing mission: agricultural training, improving food security, and fighting deforestation</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="video-container">
                    <div className="video-container-background">
                        <div className="video-yt">
                            <VideoButton thumbnail={september2025}
                                         url="https://www.youtube.com/embed/5aYatTlLZyk"
                                         title={"September 2025"}
                            />
                        </div>
                        <div className="text-container">
                            <h2>Project Milestones and Path Toward Sustainable Agricultural Development</h2>

                            <ul>
                                <li>Over 1.5 years: nursery established with 1500+ citrus trees</li>
                                <li>Community training center and shop largely constructed</li>
                                <li>Training center near completion (windows, electricity, doors installed)</li>
                                <li>30+ fruit varieties growing; avocado and banana planting started</li>
                                <li>Progress toward sustainable, commercial farming model</li>
                                <li>Planned November work: finish training center, secure well, complete water system</li>
                                <li>Solar panel installation planned to address power outages</li>
                                <li>Funding needed: ~4000 CHF to complete upcoming work</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="video-container">
                    <div className="video-container-background">
                        <div className="video-yt">
                            <VideoButton thumbnail={april2025}
                                         url="https://www.youtube.com/embed/cxsA-1V_kHg"
                                         title={"April 2025"}
                            />
                        </div>
                        <div className="text-container">
                            <h2>Training Center Progress and Community Impact Overview</h2>

                            <ul>
                                <li>Trees relocated to the training center site</li>
                                <li>Training center near completion (roof, windows, doors, toilets installed; electricity pending)</li>
                                <li>Agricultural training programs actively running (e.g. composting)</li>
                                <li>Community support expanding (including basic assistance like hospital access)</li>
                                <li>Overall strong progress in both infrastructure and community impact</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="video-container">
                    <div className="video-container-background">
                        <div className="video-yt">
                            <VideoButton thumbnail={january2025}
                                         url="https://www.youtube.com/embed/B4rmLh-Ogsk"
                                         title={"January 2025"}
                            />
                        </div>
                        <div className="text-container">
                            <h2>Agricultural Expansion and International Support for Community Development</h2>

                            <ul>
                                <li>Over 2 hectares of farmland cultivated with multiple activities underway</li>
                                <li>Fruit tree production expanded to around 1,500 trees</li>
                                <li>Community Training Center nearing completion (key infrastructure almost finished)</li>
                                <li>Ongoing agricultural skills training for local community, especially youth</li>
                                <li>Establishment of Swiss-based association and active fundraising support in Europe</li>
                                <li>Strong donor support received throughout the year</li>
                                <li>Plans for 2025–2026: complete training center, improve water system, continue farming expansion</li>
                                <li>Future goal: organize field trips for European visitors to the project site</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}