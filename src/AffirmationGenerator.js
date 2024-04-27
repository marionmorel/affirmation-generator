import { useState } from 'react';

export default function AffirmationGenerator() {

    const affirmations = [
        'I am peace, peace is within me, peace is all around me.',
        'I release all fear that tried to tell me I should be somewhere different.',
        'In this moment, I am safe and secure.',
        'I am willing to see love available to me in this experience.',
        'All contrast brings me clarity.',
        'I am present.',
        'I need only focus on right here, right now.',
        'I am relaxed and calm.',
        'I can get through difficulties.',
        'I\'m doing my best.',
        'I am more than my job.',
        'I am enough.',
        'I offer myself rest and relaxation.',
        'I am deserving of my own love and care.',
        'I take care of my mind, body, and spirit.',
        'I make healthy choices.',
        'I know how to take care of myself.',
        'I can help others when I help myself first.',
        'I care for myself because I love myself.',
        'My self-care is a priority.',
        'My peace matters.',
        'I treat myself as I would a dear friend.',
        'I am well rested.',
        'My body is powerful.',
        'I am excited for this day.',
        'I am so grateful to be alive.',
        'I love myself.',
        'I\'m going to have a great day.',
        'I am open to opportunities.',
        'Today and every day I am blessed.',
        'My life is abundant and fulfilling.',
        'I am committed to my personal growth.',
        'Every day I am better than before.',
        'No challenge is too great for me.',
        'I am energized.',
        'I wake each morning with a smile.',
        'I feel so alive.',
        'I am strong.',
        'I am capable of overcoming anything.',
        'I am resilient.',
        'I always overcome obstacles.',
        'Nothing can stand in my way.',
        'I can get through hardship.',
        'I believe in myself.',
        'I am a wonderful person.',
        'My confidence and self-esteem are high.',
        'I know my worth.',
        'I love who I am.',
        'The people in my life love and support me.',
        'I am deserving of what I desire, and I will achieve it.',
        'I radiate confidence.',
        'I make decisions that support my highest good.',
        'I am courageous.',
        'I learn and grow through difficulty.',
        'I always pick myself back up.',
        'I am powerful.',
        'I will press on and go forward.',
        'I release what no longer serves me.',
        'I am adaptable.',
        'I am proud of myself.',
        'I am happy and healthy.',
        'I am living with purpose.',
        'Every day is a gift.',
        'I am full of joy.',
        'I feel at peace.',
        'I am positive.',
        'I love being alive.',
        'Every day I embody the best version of myself.',
        'I\'m surrounded by love.',
        'My life is abundant.',
        'I have everything I need.'
    ]

    const [currentAffirmation, setCurrentAffirmation] = useState("");

    function generateAffirmation() {
        let randIndex = Math.floor(Math.random() * affirmations.length);
        setCurrentAffirmation(affirmations[randIndex]);
        return currentAffirmation;
    }

    return (
        <div>
            <h1>Random Affirmation Generator</h1>

            <button onClick={generateAffirmation}>Generate Affirmation</button>
            <div id="affirmation">
                <h3>{currentAffirmation}</h3>
            </div>
        </div>
    )
}