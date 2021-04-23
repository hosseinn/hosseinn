### Markdown Processors

This is the output of Markdown processing:

Output             | Markdown Processor
-------------------|---------------------------------------
[svx](svx.md)              | Github
[svx.html](https://hosseinn.github.io/svx.html)         | Markdown
[svx\_ditaa.html](https://hosseinn.github.io/svx_ditaa.html)   | Markdown + ditaa extension

### How?
First, install ditaa. For example, in Ubuntu:
```
sudo apt-get install ditaa
```
Then clone [py-markdown-ditaa](https://github.com/hosseinn/py-markdown-ditaa).

```
git clone https://github.com/hosseinn/py-markdown-ditaa
cd py py-markdown-ditaa
sudo python setup.py install
```

and then:

```
export DITA_IMAGE_DIR=images
export DITAA_CMD="ditaa {infile} {outfile} --overwrite"
export EXTRA_COPY_PATH=.

python -m markdown svx.md > svx.html
python -m markdown -x mdx_ditaa svx.md > svx_ditaa.html
python -m markdown -x tables README.md > index.html
```
