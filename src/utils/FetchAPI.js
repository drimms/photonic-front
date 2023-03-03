import React from 'react';

export default class PostService {
    static async fetchAPI(id) {
            try {
                
                const resp = await fetch(`http://localhost:3005/${id}`, {
                    headers: {
                    "Content-Type": "application/json"
                  },
                    body: JSON.stringify()}
                  )
                  
                const data = await resp.json()
                if (data.success ===false) {
                    return data.message
                }
                else {
                    return data.data
                }
                
            }
            catch(err) {
                throw new Error(err)
            }
    }

    static async postAPI(title, descrition, event, id) {
       event.preventDefault()
        try {
            await fetch(`http://localhost:3005/${id}`, {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
              },
                body: JSON.stringify({title, descrition})    
            })  
        }
        catch(err) {
            throw new Error(err)
        }
    }

    static async deleteAPI(id, link) {
        console.log('удаляетс id', id)
        try {
        await fetch(`http://localhost:3005/${link}/${id}`, {
            method: 'Delete', 
        })
        PostService.fetchAPI(link)  
    }
    catch(err) {
        throw new Error(err)
    }
    }
    
}

