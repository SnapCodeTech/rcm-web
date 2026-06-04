import React from 'react';
import './StagesSection.css';
import DataCollection from '../../assets/images/projectOverview/img_background.svg?raw';
import Normalization from '../../assets/images/projectOverview/img_background_blue_gray_900.svg?raw';
import Processing from '../../assets/images/projectOverview/img_background_deep_purple_100.svg?raw';
import AICorrelation from '../../assets/images/projectOverview/img_background_blue_gray_900_48x48.svg?raw';
import Outputs from '../../assets/images/projectOverview/img_background_48x48.svg?raw';
import Connector from '../../assets/images/projectOverview/img_container.svg';

const StagesSection = () => {
    const stages = [
        {
            id: 1,
            icon: DataCollection,
            title: 'Data Collection',
            description: 'Proprietary SDKs and service mesh integrations capture raw telemetry.',
            connector: Connector,
            connectorHeight: 48,
            highlighted: false,
        },
        {
            id: 2,
            icon: Normalization,
            title: 'Normalization',
            description: 'Heterogeneous data is mapped to our Unified Event Schema instantly.',
            connector: Connector,
            connectorHeight: 48,
            highlighted: false,
        },
        {
            id: 3,
            icon: Processing,
            title: 'Processing',
            description: 'Patented stream engine executes filtering and logic at line speed.',
            connector: Connector,
            connectorHeight: 48,
            highlighted: false,
        },
        {
            id: 4,
            icon: AICorrelation,
            title: 'AI Correlation',
            description: 'Cross-signal insights uncover hidden patterns across silos.',
            connector: Connector,
            connectorHeight: 48,
            highlighted: false,
        },
        {
            id: 5,
            icon: Outputs,
            title: 'Outputs',
            description: 'Real-time alerts, webhook triggers, and automated rollouts.',
            connector: Connector,
            connectorHeight: 48,
            highlighted: false,
        },
    ];

    return (
        <section className="stagesSection">
            <div className="stagesContainer">
                {/* Section Header */}
                <div className="stagesHeader">
                    <h2 className="stagesTitle">Stages of Intelligence</h2>
                    <p className="stagesSubtitle">
                        Our distributed pipeline architecture ensures every signal is captured, cleaned, and
                        correlated in a single pass.
                    </p>
                </div>

                {/* Stages Grid */}
                <div className="stagesGrid">
                    {stages?.map((stage) => (
                        <div
                            key={stage?.id}
                            className={`stageCard${stage?.highlighted ? ' highlighted' : ''}`}
                        >
                            <div className="stageCardInner">
                                <div className="stageIconBlock">
                                    {typeof stage?.icon === 'string' && stage.icon.trim().startsWith('<svg') ? (
                                        <span className="stageIcon" dangerouslySetInnerHTML={{ __html: stage.icon }} />
                                    ) : (
                                        <img
                                            src={stage?.icon}
                                            alt={stage?.title}
                                            className="stageIcon"
                                            width={48}
                                            height={48}
                                        />
                                    )}
                                    <h3 className="stageTitle">{stage?.title}</h3>
                                    <p className="stageDescription">{stage?.description}</p>
                                </div>
                                <img
                                    src={stage?.connector}
                                    alt="connector"
                                    className="stageConnector"
                                    style={{ height: `${stage?.connectorHeight}px` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StagesSection;