"use client";
import { useTheme } from 'next-themes';

const GitContributions = () => {
    const { theme } = useTheme();
    const bg_color = theme === 'dark' ? '121214' : 'ffffff';
    const color = theme === 'dark' ? '04d361' : '000000';

    return (
        <div>
            <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=mnamesujit&bg_color=${bg_color}&color=${color}&line=8257e5&point=04d361&area=true&hide_border=true`}
                alt="Git Contributions"
            />
        </div>
    );
};

export default GitContributions;
