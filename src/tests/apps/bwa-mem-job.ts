export default JSON.parse(`
{
    "reference": {
        "class": "File",
        "path": "chr20.fa",
        "size": 123,
        "checksum": "sha1$hash"
    },
    "reads": [
        {
            "class": "File",
            "path": "example_human_Illumina.pe_1.fastq"
        },
        {
            "class": "File",
            "path": "example_human_Illumina.pe_2.fastq"
        }
    ],
    "min_std_max_min": [
        1,
        2,
        3,
        4
    ],
    "minimum_seed_length": 3,
    "allocatedResources": {
        "cpu": 4,
        "mem": 5000
    }
}
`);