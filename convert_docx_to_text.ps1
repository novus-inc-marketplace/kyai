
function Convert-DocxToText {
    param (
        [Parameter(Mandatory=$true)]
        [string]$InputFilePath,

        [Parameter(Mandatory=$true)]
        [string]$OutputFilePath
    )

    # Ensure the input file exists
    if (-not (Test-Path $InputFilePath)) {
        Write-Error "Input file not found: $InputFilePath"
        return
    }

    # Create a Word Application object
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false # Set to $true if you want to see Word opening

    try {
        # Open the DOCX document
        $document = $word.Documents.Open($InputFilePath)

        # Define the text file format (wdFormatText = 2, wdFormatTextLineBreaks = 3)
        # wdFormatText (2) saves as plain text without line breaks, wdFormatTextLineBreaks (3) preserves line breaks.
        $saveFormat = [Microsoft.Office.Interop.Word.WdSaveFormat]::wdFormatTextLineBreaks

        # Save the document as a text file
        $document.SaveAs([ref]$OutputFilePath, [ref]$saveFormat)

        Write-Host "Successfully converted '$InputFilePath' to '$OutputFilePath'"
    }
    catch {
        Write-Error "An error occurred during conversion: $($_.Exception.Message)"
    }
    finally {
        # Close the document and quit Word application
        if ($document -ne $null) {
            $document.Close()
            [System.Runtime.InteropServices.Marshal]::ReleaseComObject($document) | Out-Null
        }
        if ($word -ne $null) {
            $word.Quit()
            [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
        }
        Remove-Variable -Name word, document -ErrorAction SilentlyContinue
    }
}
