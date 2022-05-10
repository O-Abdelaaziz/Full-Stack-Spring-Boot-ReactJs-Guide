import React from 'react';

const Section = (props) => {
    return (
        <section className="py-5">
            {props.children}
        </section>
    );
};

export default Section;