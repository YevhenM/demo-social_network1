import React from "react";
import { create } from "react-test-renderer";
import PfofileStat from './ProfileStat'

describe ("ProfileStatus component", () => {
    test ("status form props should be in the state", () => {
        const component = create(<PfofileStat status="hei all is okai?"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("hei all is okai?");
    });

    test ("after creation span should be displayed", () => {
        const component = create(<PfofileStat status="hei all is okai?"/>)
        const root = component.root()
        let span = root.findByType("span");
        expect(span.length).toBe(1);
    });
});

