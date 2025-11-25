import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'

interface DeleteAllButtonProps {
  onClick: () => void
}

export function DeleteAllButton({ onClick }: DeleteAllButtonProps) {
  return <Button onClick={() => onClick()}>Delete All</Button>
}
