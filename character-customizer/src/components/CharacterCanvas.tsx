import React, {useRef, useEffect} from 'react';
import { character } from '../types/character';

interface Props{
    character: character;
}

const CharacterCanvas: React.FC<Props> = ({ character }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        const canvas =canvasRef.current;
        const ctx = canvas!.getContext('2d')!;
        ctx.clearRect(0, 0, canvas!.width, canvas!.height);
        ctx.fillStyle = character.skinTone === 'light' ? 'lightYellow' : 'tan';
        ctx.fillRect(50, 50, 200, 200);

        ctx.fillStyle = character.hairColor;
        ctx.fillRect(90, 30, 120, 40);
    }, [character]);

    return <canvas ref={canvasRef} width={300} height={300}></canvas>;
};


export default CharacterCanvas;