"use client";

import Link from 'next/link';
import Props from './props';
import { useAppContext } from '../contexto/Appcontext';
export default function Uno(){

    const { nombre } = useAppContext();

    return (

        <div>
            uno


            <p> Hola  {nombre}</p>

        </div>
    );
}