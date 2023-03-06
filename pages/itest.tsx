import React from 'react';
import exceptions from '../components/exceptions';
import { useState } from 'react';

function itest() {

    var ftitle="shin-seiki-evangelion"

    function correctTitle(str:string){
        
        for(var i=0;i<exceptions.length;i++){
            console.log(exceptions[i]);
            if(exceptions[i].name.falsy==str){
                str=exceptions[i].name.truthy
                console.log(str)
            }
            
        }
        return str
    }
    const string=correctTitle(ftitle)

  return (
    <div>
        {string}
    </div>
  )

}
export default itest