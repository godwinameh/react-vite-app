

import React from 'react'
import { Select } from '@chakra-ui/select'

function StudyProgress() {
  return (
      
    <div className="select_item">
        <Select placeholder=''>
            <option value='option1'>Biology</option>
            <option value='option2'>chemistry</option>
            <option value='option3'>physics</option>
            <option value='option3'>Mathematics</option>
            <option value='option3'>English Language</option>
            <option value='option3'>Government</option>
            <option value='option3'>computer studies</option>
            <option value='econs'>Economics</option>
        </Select>           
    </div>

  )
}

export default StudyProgress